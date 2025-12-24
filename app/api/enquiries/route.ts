import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Enquiry schema for validation
const enquirySchema = z.object({
    type: z.enum(["service", "rental", "contact"]),
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    message: z.string().optional(),
    // Service enquiry fields
    service_id: z.string().optional(),
    // Rental enquiry fields
    use_case: z.string().optional(),
    rental_start_date: z.string().optional(),
    rental_end_date: z.string().optional(),
    quantity: z.number().optional(),
    plant_preference: z.string().optional(),
    location: z.string().optional(),
    notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedData = enquirySchema.parse(body);

        // For now, we'll just log the data (replace with Supabase integration)
        console.log("New enquiry received:", validatedData);

        // TODO: Uncomment when Supabase is configured
        // const supabase = await createClient();
        // const { data, error } = await supabase
        //   .from("enquiries")
        //   .insert([{
        //     ...validatedData,
        //     status: "new",
        //   }])
        //   .select()
        //   .single();
        //
        // if (error) {
        //   console.error("Supabase error:", error);
        //   return NextResponse.json(
        //     { error: "Failed to save enquiry" },
        //     { status: 500 }
        //   );
        // }

        // TODO: Send email notification
        // await sendEmailNotification(validatedData);

        return NextResponse.json(
            {
                success: true,
                message: "Enquiry submitted successfully",
                data: { id: Date.now().toString() }, // Placeholder ID
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: "Validation failed", details: error.issues },
                { status: 400 }
            );
        }

        console.error("Error processing enquiry:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    // This would normally fetch enquiries from Supabase
    // Protected by admin authentication
    return NextResponse.json({
        message: "GET /api/enquiries - Admin only endpoint",
        note: "Configure Supabase to enable this endpoint",
    });
}
